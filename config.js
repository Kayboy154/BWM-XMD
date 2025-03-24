const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID BWM-XMD;;;H4sIAAAAAAAAA5VVyY7jNhD9F17tnta+GGggkrzbalt2S16CHGiRkmitpiQvGhjIPYc559RAckuu8xXzF9NfEsjuRk8wSzo6ERT56lXVe8X3IElJjkf4BFrvQUbJHha4XhanDIMW0EvPwxQ0AYIFBC0Q6oMchbfOqufodjXOg97i4FcHnaCppXF9KzceVIQe/BGb34FzE2TlJiLuDwAnEyTLktuWVuSQImdt0glLS8E2G5Odsdu4DX4wD0pmIVfpHTjXiJBQkvidLMAxpjAa4dMUEvo2+oyxJidTryZlNdQr6HalhTaznLJTNBrmlGbeXOoNj5mt88Lb6M+VznEeOSOqTDBvdgUaVBw1luJ4bEXsLtWWDSajlbiG7OFKPyd+gtEA4aQgxenNde913A5KWEaVXZEdzDhLIqztOgvmdttZ2VnAwMZit5QZ1Hsj8ZnGeP2tFi4aBj3etmMpSHQ3Vgy5PYAOnWhDxWJ6U7Vig/xL4lP6opXw/9Sd3LPDwQaPq9K8tXdc2Dt4XJVGU0wGPX0f4uOc5IdQq7q88jb6p7Lb56dMVcb3m0j2F45zbEvSUk862Wbd3cbbasZtuWiNA+uVPixK+iOW93KyPLij/cKa72eDZex2XS7EKmMfVHcqq+X+gemu+3YyX5ABpxzHRFx1vNTbxhto0eAEnfDIh5twOGMOUopFP13QkWHdXTIK8WmAQIs9NwHFPskLCguSJvUex0tNANF+jl2Ki0t5QWgF+ggqWLs/ZSac8ovQiYvbdjiTvMKuhNgWK42hPhWodgeaIKOpi/Mcoz7Ji5SeTJzn0Mc5aP186VSdNMVxWuAhQaAFOImXZUlkVFWSfsrfHQJY5DDL3iW4AE3g0TQ2MWgVtMRNcLkg6QbXlgVW1HiOFTndaEsdndMkQ5YVUeXkOsX4GvSBxDgvYJyBFisLnMDwsiyff2mCBB+Lq37qrCW2CTxC88JOyixKIXoR18tP6LppmRTzU+Ia9QJT0PpiGxcFSfy8zqxMIHUDssdGnQdoeTDK8bkJEN4TF9d44BRSUy6UrkVu2oplzh3vpiz9unJBmlyPqCqHZFflbhDi8I2gbLwbVUXwBikbeYMVwYOuB+pyXK1b3/muklQx8re8VM4i0Vpn7mId6jbdhWWOOhc1XCWAKUYvVd5ANyyzhzTEyQ9wR6fGylDW9mSOsv3OhlrnyEv6foMq5gvcq7RA6/3ruDRSVOMtjRWvrfpTUHerjvOVGlrc13pIYH0YPD3++fT41+ePv33++OunD59+//zxw6cPT49/Pz3+Ucd+bkyNinABSZSDFjAG8aDKrE5nxB8lWej1tIGvGb4GXhv5Ysyr8JE47ffmaoRlLdUzCVoSZwwQCvcZY6muGWYODLMtCUTfvfsGSB2SnZnLubpKY7pSCh82dNkTtljdBMeELVyVjbo7cWQLpCFpSuKmln2c3g4gMzyokaR5a2UzY2YNBFOG21EzCwIdoouLXwT1r2BSxiFz3Ii2i8PBJyOfZjRX9Ip2bJ5NkvHM4HubaVKGvLDwBkK66qGKmUhDxynTkbgnWMiXZX40x5SRdRKKsRlT7XlkXEZW9PxUkGczX+XnEXyZvM+d+a8GvhqBOTe/gHge5d8Rm77ED8djuF8vy8NIgzgOJ4VP+sv1WEKd6bI9HDmLbLQSUrzqg3Pt8CyChZfSGLQATBBNCQJNEMG80F69/K3xwDZBfNKybF7A4mUEAK3+7sUOOP8D2+DJlqUIAAA=|| '',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

