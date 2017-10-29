CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers` (
  `burger_id` INT (20) NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(32) NOT NULL,
  `devoured` BOOLEAN NOT NULL DEFAULT FALSE,
  `date_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`burger_id`));