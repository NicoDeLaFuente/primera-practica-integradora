import { Router } from "express";
import { getProducts } from "../dao/dbManagers/productManager.js";

const router = Router()

router.get("/", async (req, res) => {
    try{
        const products = await getProducts()
        console.log(products[0].category)
        res.render("home", {products})
    }
    catch(err) {
        res.render("home", `Ha ocurrido un error ${err}`)
    }
})

export default router