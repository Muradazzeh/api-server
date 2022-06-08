`use strict`
const {app}=require("../src/server");
const supertest=require("supertest");
const mockRequest=supertest(app);

const { db }=require("../src/models/index");


beforeAll(async () => {
    await db.sync();
});

describe("This is the jest test for the srever and Car routes", ()=>{
        test('404 Not found page', async () => { 
            const response= await mockRequest.get("/lolo")
            expect(response.status).toEqual(404)
         })
         test("handle bad method", async () =>{
            const respons = await mockRequest.post("/Car/2")
            expect(respons.status).toEqual(404);
        })

         test("Test for the HOme route", async ()=>{
            const response = await mockRequest.get("/")
            expect(response.status).toEqual(200)
         })

         test("Testing the posting method", async ()=>{
             const response=await mockRequest.post("/Car").send({
                CarName:"accent",
                EngineSize:"1400 CC",
                Manufacturer:"Hunday",
                Country:"South korea"
             })
             expect(response.status).toEqual(201)
         })

            test("Read a list of records using GET", async ()=>{
             const response= await mockRequest.get("/Car")
             expect(typeof response.body).toBe('object')
         })
         test("geting from Car route", async ()=>{
             const response= await mockRequest.get("/Car")
             expect(response.status).toEqual(200)
         })

         it('Updating data base', async () => {
            const response = await mockRequest.put('/Car/1');
            expect(response.status).toBe(201);
        });

        it('Deleting from data base ', async () => {
            const response = await mockRequest.delete('/Car/1');
            expect(response.status).toBe(204);
        });
    
    });


    describe("This is the jest test for the CarDetails route srever", ()=>{
       
         test("Testing the posting method", async ()=>{
             const response=await mockRequest.post("/CarDetails").send({
                fuelType:"Disel",
                WheelDrive: "2 Wheel",
                MaxSpeed:160 ,
                CarId:1
             })
             expect(response.status).toEqual(201)
         })

            test("Read a list of records using GET", async ()=>{
             const response= await mockRequest.get("/CarDetails")
             expect(typeof response.body).toBe('object')
         })
         test("geting from CarDetails route", async ()=>{
             const response= await mockRequest.get("/CarDetails")
             expect(response.status).toEqual(200)
         })

        //  it('Updating data base', async () => {
        //     const response = await mockRequest.put('/CarDetails/1');
        //     expect(response.status).toBe(201);
        // });

        it('Deleting from data base ', async () => {
            const response = await mockRequest.delete('/CarDetails/1');
            expect(response.status).toBe(204);
        });
    
    });




    afterAll(async () => {
        await db.drop();
    });