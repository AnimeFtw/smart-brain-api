
const handleImage = (req, res, postgres) =>{
  const{ id } = req.body;
  postgres('users').where('id', '=', id)
  
    .increment('entries', 1)
    .returning('entries')
    .then(entries =>{
      res.json(entries[0].entries);
    })
    .catch(err => res.status(400).json('unable to get entries'))
  
}

export default handleImage;