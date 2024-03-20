export class BandSiteAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
  }
  async postComment(comment) {
    const response = await axios.post(`${this.baseURL}/comments?api_key=${this.apiKey}`, comment);
    return response;
  }

  async getComments() {
    const response = await axios.get(`${this.baseURL}/comments?api_key=${this.apiKey}`);
    return response.data.sort((firstComment, secondComment) => {
      return secondComment.timestamp - firstComment.timestamp;
    });
  }

  async getShows() {
    const response = await axios.get(`${this.baseURL}/showdates?api_key=${this.apiKey}`);
    return response.data;
  }
}
