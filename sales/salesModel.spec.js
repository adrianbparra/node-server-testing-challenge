const db = require("../database/dbConfig.js");

const Sales = require("./salesModel.js");

beforeEach(async () =>{
    await db("sales").truncate();
})

describe("sales model", () =>{
    describe("sales", () =>{
        it("return and array", async ()=>{
            const sales = await db("sales")
            
            expect(sales).toHaveLength(0)
        })

        it("insert item", async ()=>{
            await Sales.insert({customer:"adrian", total: 13.54})

            const sales = await db("sales")

            expect(sales).toHaveLength(1)
        })

        it("remove sale", async ()=>{
            await Sales.insert({customer:"adrian", total: 13.54})
            var sales = await db("sales")
            expect(sales).toHaveLength(1)

            const removed = await Sales.remove(1)

            expect(removed).toBe(1)
            
            
        })
    })
})