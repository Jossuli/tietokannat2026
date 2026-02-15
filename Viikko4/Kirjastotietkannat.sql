CREATE VIEW Suoritus AS
SELECT idTeos, Nimi, Julkaisuvuosi, idKirjailija, idKirja
FROM Teos
JOIN Kirjailija ON Teos.idTeos=kirjailija.idKirjailija;
JOIN Kirjailija ON Kirja.idKirja=Lainaus.idKirja;