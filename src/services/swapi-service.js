export default class SwapiService {

  _apiBase = 'https://swapi.dev/api'

  async getResources (url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllPeople () {
    const res = await this.getResources(`/people/`);
    return res.results;
  }

  async getAllPlanets () {
    const res = await this.getResources(`/planets/`);
    return res.results;
  }

  async getAllStarships () {
    const res = await this.getResources(`/starships/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResources(`/people/${id}/`);
  }

  getStarship(id) {
    return this.getResources(`/starship/${id}/`);
  }
}