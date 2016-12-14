CREATE SCHEMA `suppbot` ;

CREATE TABLE `suppbot`.`members` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `member_id` VARCHAR(10) NOT NULL,
  `business_id` INT NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO members (member_id, business_id) VALUES ("mmxam", 123456)