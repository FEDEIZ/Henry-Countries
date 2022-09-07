const { Country, conn } = require('../../src/db.js');
//const { expect } = require('chai');

describe('Country model', () => {
  // before(() => conn.authenticate()
  //   .catch((err) => {
  //     console.error('Unable to connect to the database:', err);
  //   }));
  beforeAll(async () => {
    try{
      await conn.sync({ force: true });
    }
    catch(err) {console.log("Unable to connect to the database: ", err.message);}
  });

  describe('Validators', () => {
    
      it("should not create the Country if ID has more than 3 letters", async () => {
        expect.assertions(1);
        try {
          await Country.create({
            id: 'ARGE',
            name: 'argentina',
            flagImg: "https://flagcdn.com/ar.svg",
            continent: 'americas',
            capital: 'buenos aires',
          });
        } catch (error) {
          expect(error.message).toBeDefined();
        }
      });
      it("should not create the Country if name is not send", async () => {
        expect.assertions(1);
        try{
          await Country.create({
            id: 'ARG',
            //name: 'argentina',
            flagImg: "https://flagcdn.com/ar.svg",
            continent: 'americas',
            capital: 'buenos aires',
          });
        }
        catch(err) {
          expect(err.message).toBeDefined();
        }
      })

      it("should create the Country if all validators are ok", async () => {
        await Country.create({
            id: 'ARG',
            name: 'argentina',
            flagImg: "https://flagcdn.com/ar.svg",
            continent: 'americas',
            capital: 'buenos aires',
        });

        const argentina = await Country.findByPk('ARG',{attributes: ['id', 'name', 'flagImg', 'continent', 'capital']});

        expect(argentina.dataValues).toEqual({
          id: 'ARG',
          name: 'ARGENTINA',
          flagImg: "https://flagcdn.com/ar.svg",
          continent: 'AMERICAS',
          capital: 'BUENOS AIRES',
        });

      });
    });

    afterAll(async () => {
      await conn.sync({ force: true });
      conn.close();
    });
});


