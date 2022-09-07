/* eslint-disable import/no-extraneous-dependencies */
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');
const loadDb = require("../../src/loadDb.js");
var countries = [];
const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
    countries = await loadDb();
  });
  
  describe('GET /countries', () => {
    it('should return status 200 and 250 countries from api', async () => {
      const res = await agent
      .get("/countries")
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toEqual(countries.length);
      }
    );
  });

  describe('GET /countries/:idCountry', () => {
    it('should return status 200 and a country by Id through params', async () => {
      const res = await agent
      .get("/countries/ARG")
      expect(res.statusCode).toBe(200);
      expect(res.body.name).toEqual('ARGENTINA');
      }
    );
  });

  describe('GET /countries/?name', () => {
    it('should return status 200 and all countries with name iLike the query params name', async () => {
      const res = await agent
      .get("/countries/?name=BRA")
      expect(res.statusCode).toBe(200);
      const countriesName = countries.filter(country => country.name.common.toUpperCase().match(/^.*BRA.*$/));
      console.log(countriesName);
      expect(res.body.length).toEqual(countriesName.length);
      }
    );
  });

  afterAll(() => {
    conn.close();
  });
});
