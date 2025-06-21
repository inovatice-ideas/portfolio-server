import express from 'express';
import axios from 'axios';

const router = express.Router();

function formatAuthors(authors) {
    if (!Array.isArray(authors)) return '';
  
    return authors
      .map(author => `${author.given} ${author.family}`)
      .join(', ');
  }

// ✅ Serve CV from GitHub via DB lookup
router.get('/:orcid', async (req, res) => {
  const { orcid } = req.params;
  const collected_publications = [];
  try {
    const orcid_data = 'https://pub.orcid.org/v3.0/' + orcid + '/works';
    const response_1 = await axios.get(orcid_data, { headers: { Accept: 'application/json' } });
    const data = response_1.data.group;
    for (const item of data) {
      const title = item['work-summary'][0]['title']['title']['value'];
      const type = item['work-summary'][0]['type'];
      const journal = (item['work-summary'][0]['journal-title'] !== null) ? item['work-summary'][0]['journal-title']['value'] : '';
      const year = item['work-summary'][0]['publication-date']['year']['value'];
      const doi = item['work-summary'][0]['url']['value'];

      const response_2 = await axios.get(doi, { headers: { Accept: 'application/json' } });
      const data_2 = response_2.data;
      const publisher = data_2['publisher'];
      const authors = formatAuthors(data_2['author']);

      collected_publications.push({title: title, year: year, journal: journal, doi: doi, type: type, authors: authors, publisher: publisher});
    }

    res.status(200).json({success: true, message: 'ORCID loaded successfully', data: collected_publications});
  } catch (err) {
    console.error('Error serving ORCID:', err.message);
    res.status(500).json({ success: false, error: 'Failed to load ORCID' });
  }
});

export default router;