const sqlite3 = require('sqlite3');

// Query
var createQuery =
'CREATE TABLE tamu ( id NUMBER , nama VARCHAR(100), alamat VARCHAR(100), no_telp NUMBER(12), catatan VARCHAR(1));';
var insertQuery =
'INSERT INTO tamu (id , nama, alamat, no_telp, catatan) VALUES (1 , "nanda", "malang", "081121121121", "y");'
var selectQuery = 'SELECT * FROM tamu ;'

//Menghubungkan ke database |membuat database jika databse belum ada
let db= new sqlite3.Database('./guestbook.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
        createDatabase();
        return;
        } else if (err) {
            console.log("Getting error " + err);
            exit(1);
    }
    // runQueries(db);
    createDatabase();
});

//Fungsi untuk membuat database
function createDatabase() {
    var newdb = new sqlite3.Database('guestbook.db', (err) => {
        if (err) {
            console.log("Getting error " + err);
            exit(1);
        }
        createTables(newdb);
    });
}

//Fungsi untuk membuat tabel
function createTables(newdb) {
    newdb.exec(createQuery, ()  => {
      insertData(newdb);
    });
}

// Fungsi untuk menambahkan data ke tabel
function insertData(newdb) {
  newdb.exec(insertQuery, ()  => {
    runQueries(newdb);
  });
}

// Fungsi untuk menampilkan data dari tabel
function runQueries(db) {
  db.all(selectQuery , (err , data) => {
    if(err) return;

    // Success
    console.log(data);
  });
}
