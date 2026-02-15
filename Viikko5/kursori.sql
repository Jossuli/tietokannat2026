CREATE PROCEDURE `kursori` ()
BEGIN
	/*Paikalliset muuttujat*/
	DECLARE arvos INT;
	DECLARE ID INT;
	/*Tosi, kun kursori menee taulun loppuun*/
	DECLARE done BOOLEAN;
	/*Haetaan kursoriin kaikki tiedot kahdesta sarakkeesta*/
	DECLARE arvos_cursor CURSOR for
	SELECT idArviointi,Arvosana FROM Arviointi;
	/* NOT FOUND-käsittelijä (kun rivit loppuu) */
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET done=TRUE;
	/*Avataan kursori*/
	OPEN arvos_cursor;
	/*Aloitetaan silmukka*/
	arvos_loop: loop
	/*Sijoitetaan kursorin arvot rivi kerrallaan muuttujiin*/
	FETCH arvos_cursor INTO ID,arvos;
	/*Kun kaikki luettu, silmukasta ulos*/
	IF done then
	CLOSE arvos_cursor;
	LEAVE arvos_loop;
	END IF;
	/*Päivitetään Arvosana-sarakkeen yksi rivi*/
	UPDATE Arviointi SET Arvosana=arvos+1 WHERE ID=idArviointi AND
	Arvosana < 5;
END LOOP arvos_loop;
END