import API from '../version.json'

export const version = (req, res, next) => {
  res.send({ 
   API
  });
 
}

