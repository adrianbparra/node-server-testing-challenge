const server = require("./server.js");
const request = require("supertest");

describe("server running", () =>{
    it("server should be in testing environment", ()=>{
        expect(process.env.DB_ENV).toBe("testing")
    })

    describe("GET server UP /", () =>{

        it("should return status 200", ()=>{
            return request(server).get("/").expect(200)
        })

        it("should return a {api: 'up'}", async () =>{
            const res = await request(server).get("/")
            expect(res.body).toEqual({api: 'up'})
        })

    })
})