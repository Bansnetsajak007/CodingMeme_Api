import DBconncetion from './Dbconfig.js';
import uplodeFile from './uploder.js';

DBconncetion().then(() =>{
    uplodeFile();
});
