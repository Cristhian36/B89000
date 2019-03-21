/*
SQLyog Community Edition- MySQL GUI v8.05 
MySQL - 5.5.5-10.1.38-MariaDB : Database - financiera
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`financiera` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `financiera`;

/*Table structure for table `prestamo` */

DROP TABLE IF EXISTS `prestamo`;

CREATE TABLE `prestamo` (
  `id_prestamo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) DEFAULT NULL,
  `cedula_pasaporte` varchar(60) DEFAULT NULL,
  `telefono` varchar(60) DEFAULT NULL,
  `fecha_nacimiento` int(11) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `ciudad` varchar(60) DEFAULT NULL,
  `provincia` varchar(60) DEFAULT NULL,
  `calle` varchar(60) DEFAULT NULL,
  `monto` int(11) DEFAULT NULL,
  `tipo_garantia` enum('aval','hipoteca','embargo') DEFAULT NULL,
  `tipo_prestamo` enum('no_garantia','garantia') DEFAULT NULL,
  `comentario` text,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id_prestamo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `prestamo` */

insert  into `prestamo`(`id_prestamo`,`nombre`,`cedula_pasaporte`,`telefono`,`fecha_nacimiento`,`email`,`ciudad`,`provincia`,`calle`,`monto`,`tipo_garantia`,`tipo_prestamo`,`comentario`,`fecha`) values (1,'Matematicas','7686987678','456789',2019,'admin@gmail.com','asdfasdfad','waaaaa','asdfasd',5000,'aval','garantia','hahahahhaha','2019-02-28'),(2,'Matematicas','7686987678','456789',2019,'admin@gmail.com','asdfasdfad','waaaaa','asdfasd',5000,'aval','garantia','hahahahhaha','2019-02-28'),(3,'Roberto chacon','7686987678','456789',2019,'chacon@gmail.com','asdfasdfad','waaaaa','asdfasd',2000,'embargo','garantia','todo bien ','2019-02-28'),(4,'Roberto chacon','7686987678','1234567890',2019,'chacon-1963@hotmail.com','asdfjaklsdf','aqui','asdfasdf',3000,'hipoteca','garantia','todo nitido','2019-02-28'),(5,'Roberto','7686987678','1234567890',2019,'yo@gmail.com','asdfasdfad','waaaaa','ftyujnlk',5555,'aval','garantia','jkalsdjfladsjlkf\r\n','2019-02-28');

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `clave` varchar(30) DEFAULT NULL,
  `role` enum('admin','user') DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id_user`,`nombre`,`email`,`clave`,`role`,`fecha`) values (1,'admin','admin@gmail.com','admin','admin','2019-01-20');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
