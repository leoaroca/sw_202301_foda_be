import express from 'express';
const router  = express.Router();


import empresasrouter from './empresas/empresas';


router.get('/', (_req, res) => {
  res.json({msg:'Hello World!'});
 });


 router.get('/version', (_req, res)=>{
 const version: string = "1.0.0";
 const jsonResp = {"name": "FODA be", "version": version};
 res.json(jsonResp);

});

router.use('/empresas', empresasrouter);

export default router;
