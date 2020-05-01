const server = require("../server.js");
const request = require("supertest");


describe("server for sales", () =>{
    it("should return 200", () =>{
        return request(server).get("/api/sales").expect(200)
    })

    describe("get for certain sale", () =>{
        it("should get error since no id found", async ()=>{
            const sale =  await request(server).get("/api/sales/100")

            expect(sale.body).toEqual({message: "No sale found"})
            
        })
    })
})