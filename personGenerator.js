const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Вероника",
            "id_2": "Анастасия",
            "id_3": "Екатерина",
            "id_4": "Марина",
            "id_5": "Елена",
            "id_6": "Анна",
            "id_7": "Алина",
            "id_8": "София",
            "id_9": "Елена",
            "id_10": "Наталья"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        let gender = this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender;
    },

    randomFirstName: function (gender) {
        if (gender === 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
         } else {
            return this.randomValue(this.firstNameFemaleJson);
         }
    },

    randomSurname: function (gender) {
        if (gender === 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            return `${this.randomValue(this.surnameJson)}а`;
        }
    },

    randomPatron: function (gender) {
        if (gender === 'Мужчина') {
            return `${this.randomValue(this.firstNameMaleJson)}ович`;
        } else {
            return `${this.randomValue(this.firstNameMaleJson)}oвна`;
        }
    },

    randomBirthDate: function () {
        let date = this.randomIntNumber(1999, 1950);
        return date;
        },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.patron = this.randomPatron(this.person.gender);
        this.person.birthDate = this.randomBirthDate();
        return this.person;
    }
};
