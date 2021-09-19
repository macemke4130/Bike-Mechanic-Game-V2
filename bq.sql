CREATE SCHEMA `bikequiz`;
use bikequiz;

create user 'bikequiz_user'@'localhost' identified by 'root';
GRANT ALL ON bikequiz.* TO 'bikequiz_user'@'localhost';

create table parts (
	id int primary key auto_increment not null,
    win varchar(64),
    lose1 varchar(64),
    lose2 varchar(64),
    lose3 varchar(64)
);

insert into parts (win, lose1, lose2, lose3) values (
	"Rotor Lock Washer", "Rotor Shim", "Flat Brake Shim", "Spoke Washer"
);

select * from parts;

create table wrong (
	id int primary key auto_increment not null,
    lose varchar(64)
);

create table photos (
	id int primary key auto_increment not null,
    part_id int not null,
    filename varchar(120)
);

insert into photos (part_id, filename) values (
	5, "PXL_20210913_181950881"
);

select * from photos;

create table highscores (
	id int primary key auto_increment not null,
    name varchar(120),
    totalscore int,
    club100 bool default false,
    club100num int,
    scoredate datetime default now()
);
select * from highscores order by totalscore desc limit 10;
update highscores set club100num = null;