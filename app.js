class Music{

    constructor(title,singer,img,file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    };
    getName(){
        return this.title + " - " + this.singer;
    }
};

const musicList = [
    new Music("Demet Akalin","Ben Fero","1.jpg","1.mp3"),
    new Music("1,2,3","Ben Fero","3.jpg","3.mp3"),
    new Music("Dua Lipa","One Kiss","2.jpg","2.mp3")
];


