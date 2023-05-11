-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-05-2023 a las 23:24:06
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `plantasyotrashierbas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `subtitulo` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(9, 'huerta Otoñal', 'que plantamos?', 'ada cultivo depende de la época del año en la que se desarrolle para lograr buenos frutos. Aquí compartimos con ustedes el calendario de siembra de la temporada otoño-invierno.\r\n\r\nEn esta época del año podemos dar inicio a la siembra de las  especies de huerta de otoño/invierno teniendo en cuenta que:\r\n\r\n\r\nLas verduras de hoja como la ACELGA, ACHICORIA y LECHUGA son algunas de las especies a sembrar. Se recomienda hacerlo en forma escalonada (sembrar una vez al mes) para cosechar verduras durante los seis meses de la temporada.', 'ywz7rvnihomlariok2cu'),
(2, 'Otoño', 'Poda', 'Para que las plantas de tu jardín y terraza (también las del interior de tu casa) crezcan fuertes, necesitan un riego adecuado, luz y un sustrato que evita los encharcamientos. Pero, además, hay otros cuidados que necesitan tus plantas y que ayudan a que la planta se desarrolle bien y frondosa de año en año. La poda consiste en eliminar algunas ramas de una planta o árbol para que su desarrollo sea mejor y que ofrezcan una floración más bella y mejores frutos.\r\n\r\nPero para que la poda sea exitosa, tienes que diferenciar entre diversos tipos de poda que, además, se realizan en momentos distintos. Te explicamos cuáles son los distintos tipos de poda y cuándo realizarlas.\r\nLa poda se basa en eliminar brotes y ramas de la planta, de manera que les proporcione fuerza y vigor a las plantas, así como estimular su crecimiento. También ayuda a un mejor desarrollo y una floración más frondosa. Otro de los motivos por los que hay que realizar la poda con frecuencia es para realizar la limpieza de la planta, eliminando las flores marchitas, las partes enfermas o las ramas secas e inútiles.  \r\n\r\nOtra de las ventajas de la poda es que ayuda a orientar el crecimiento y a una distribución equilibrada de las ramas, así como ayudar a que el sol y la luz llegue a las zonas interiores de las ramas. Hay podas que se emplean también para dar una forma especial a una planta o un árbol. ', 'huwoghyq03rkol1c8hay'),
(5, 'Otoño', 'plantas de interior ', 'te mostramos un listado con algunas de las que florecen durante esta época y otras que serán su complemento perfecto. Y ustedes, ¿con cuál de todas se quedan?\r\n\r\n*Monstera\r\n* Potus\r\n* Capsicum annuum\r\n* Anturio\r\n* Violeta de los Alpes', 'fejdbmk2pqbpkced77cu'),
(11, 'Otoño al fin', 'Pensamientos: plantas de otoño resistentes y coloridas', '\r\nEsta clase de plantas resiste perfectamente las bajas temperaturas y son ideales para los meses de otoño y de invierno. Se trata de plantas con unas flores muy coloridas y resistentes al frío que harán que tu jardín luzca de una manera espléndida. De hecho, existen diversas variedades con muchos colores distintos e, incluso, los hay con más de un color en cada flor.\r\n\r\nA la hora de su cultivo de los pensamientos o violas, vas a necesitar un suelo bastante rico en nutrientes, con un buen drenaje y con un ambiente bastante húmedo. Si tienes en cuenta estos 3 factores podrás disfrutar de unos espectaculares pensamientos en tu jardín de casa, ya estén plantados en el propio suelo o en macetas.', 'vmjvrmrdyls1cylyvsco'),
(8, 'es hora de plantar! ', 'Tulipanes', 'recuerden que es momento de plantar bulbos, y que mejor que nos reciban al inicio de la primavera los hermosos tulipanes! ', 'ds8jr4ofjlbyj80phgkw');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Nadia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'valki', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
