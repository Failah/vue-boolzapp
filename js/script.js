console.log('JS OK!');



const app = new Vue(
    {
        el: '#root',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            randomMessagesAutoReplies: [
                'Che figata, funziona!',
                'Ciao io sono Valerio e ho sviluppato quest\'app!',
                'Sono soltanto un bot ma so rispondere!',
                'Ho una paperella gialla che mi supporta sempre mentre scrivo codice!',
                'Oggi non ho voglia di fare niente!',
                'Ordiniamo una bella pizza per cena? E anelli di cipolla fritti?',
                'Ciao mi chiamo Valerio e sono iscritto alla Boolean!',
                'Sono soltanto un messaggio selezionato casualmente in un array di messaggi pronti!',
                'Ok! (lo chiedeva la consegna lol)',
                'Caparezza è uno dei miei cantanti preferiti!'
            ],

            activeIndex: 0,

            newMessage: '',

            // activePopMenu: true,

            popMenuIndex: undefined,

            searchInput: '',
        },

        methods: {
            setActiveContact(index) {
                this.activeIndex = index;
            },

            sendNewMessage(text) {
                let newMessageToSend = {
                    date: this.getNow(),
                    message: text,
                    status: 'sent'
                };

                this.contacts[this.activeIndex].messages.push(newMessageToSend);

                this.newMessage = '';

                setTimeout(this.autoBottomScroll, 30);

                setTimeout(this.displayContactIsTyping, 1000);

                setTimeout(this.sendAutomaticReply, 3000);
            },

            sendAutomaticReply() {

                let randomMessageIndex = Math.floor(Math.random() * 10);

                let randomSelectedMessage = this.randomMessagesAutoReplies[randomMessageIndex];

                let automaticReplyToSend = {
                    date: this.getNow(),
                    message: randomSelectedMessage,
                    status: 'received'
                };

                this.contacts[this.activeIndex].messages.push(automaticReplyToSend);

                setTimeout(this.autoBottomScroll, 30);

                // changes the "last access" text back to "last access today at..." after getting an answer
                let contactIsTypingArea = document.getElementById('contact-last-access');
                contactIsTypingArea.innerHTML = 'Ultimo accesso oggi alle 12:00';
            },

            autoBottomScroll() {
                document.getElementById('bottom-scroll').scrollIntoView();
            },

            // changes the "last access" text into "user is typing" when user is answering a message
            displayContactIsTyping() {
                let contactIsTypingArea = document.getElementById('contact-last-access');
                contactIsTypingArea.innerHTML = this.contacts[this.activeIndex].name + ' sta scrivendo...';
            },

            filterContacts() {
                console.log(this.searchInput);

                this.contacts.forEach((contact) => {
                    contact.visible = contact.name.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1;
                })
            },

            switchActivePopMenu(event, index) {
                console.log('Down-arrow clicked correctly');

                event.stopPropagation();

                if (this.popMenuIndex != index) {
                    this.popMenuIndex = index;
                    console.log(this.popMenuIndex);
                } else {
                    this.popMenuIndex = undefined;
                }
            },

            closePopUpMenu() {
                this.popMenuIndex = undefined;
            },

            getHoursMinutes(dateToFormat) {
                const array = dateToFormat.split(" "); // ["10/01/2020",  "15:30:55"]
                const ora = array[1]; // "15:30:55"
                const arrayOra = ora.split(":"); // ["15", "30", "55"]
                const oreMinuti = arrayOra[0] + ":" + arrayOra[1]; // "15:30"
                return oreMinuti;
            },

            getNow() {
                const now = new Date();
                console.log(now.getHours() + ":" + now.getMinutes());

                const hours = this.formatDatePart(now.getHours());
                const minutes = this.formatDatePart(now.getMinutes());
                const seconds = this.formatDatePart(now.getSeconds());

                const day = this.formatDatePart(now.getDay());
                const month = this.formatDatePart(now.getMonth() + 1);
                const year = now.getFullYear();
                return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
            },

            formatDatePart(datePart) {
                return datePart < 10 ? "0" + datePart : "" + datePart;
            },

            deleteMessage(index) {
                console.log('Delete message clicked');
                this.contacts[this.activeIndex].messages.splice(index, 1);

            }
        }
    }
)