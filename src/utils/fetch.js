import fetch from 'isomorphic-fetch';

const BASE_URL = 'https://statsapi.web.nhl.com/api/v1';

/**
 * Make request to provided enpoint
 * @param {string} endpoint - API endpoint
 * @return {Promise} request response or error
 */
const nhlFetch = endpoint => {
  const HEADERS = {
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    Host: 'statsapi.web.nhl.com',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'
  };

  const url = `${BASE_URL}${endpoint}`;

  return fetch(url, { headers: HEADERS });
};

export default nhlFetch;
