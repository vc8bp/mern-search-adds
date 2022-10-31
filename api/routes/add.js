const router = require('express').Router()
const Add = require('../models/add');
const Company = require('../models/company');


router.get('/adds', async (req, res) => {
    console.log("me hit")
    let search = req.query.s || "";
    console.log(search)
    try {
            const adds = await Add.aggregate([
                {
                    $lookup: {
                        from: "companies",
                        localField: "companyId",
                        foreignField: "_id",
                        as: "company",
                    }
                },
                {
                    $unwind: {
                        path: "$company"
                    }
                },
                {
                    $match:{
                        "$or" : [
                            {"company.name": {$regex : search, $options: "i"}},
                            {"primaryText" : {$regex : search, $options: "i"}},
                            {"headline" : {$regex : search, $options: "i"}},
                            {"description": {$regex : search, $options: "i"}},
                        ]       
                    }
                }
            ])
        return res.status(200).json(adds)
    } catch (error) {
        console.log(error)
        res.status(500).json({"success": false, "error": "internal server error"})
    }
    
})

module.exports = router;