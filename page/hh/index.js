import dataList from './2.json'
import 'DPlayer/dist/DPlayer.min.css';
import DPlayer from 'DPlayer';

// const dp = new DPlayer(options);

window.onload = function () {
    new Vue({
        el: '#app',
        data: {
            dataList,
            player: null,
            nowId:null,
        },
        methods: {
            playVedio(id,item) {
                if(id==this.nowId){
                    return
                }
                if(this.player){
                    this.player.destroy()
                }
                this.nowId=id
                this.player= new DPlayer({
                    container: document.getElementById(id + ''),
                    autoplay: true,
                    theme: '#FADFA3',
                    loop: false,
                    lang: 'zh-cn',
                    screenshot: true,
                    hotkey: true,
                    preload: 'none',
                    volume: 0.0,
                    mutex: true,
                    video: {
                        url: item.m3u8,
                        pic: item.img,
                        thumbnails: item.img,
                        type: 'hls'
                    }
                });
            }
        },
        mounted: function () {
            // this.$nextTick( () =>{
            // Code that will run only after the
            // entire view has been rendered
            //   console.log(dataList)
            //   this.palyList=dataList.map((item,index)=>{
            //       console.log(document.getElementById(index+''))
            //    return new DPlayer({
            //             container: document.getElementById(index+''),
            //             autoplay: false,
            //             theme: '#FADFA3',
            //             loop: false,
            //             lang: 'zh-cn',
            //             screenshot: true,
            //             hotkey: true,
            //             preload: 'none',
            //             // logo: 'logo.png',
            //             volume: 0.7,
            //             mutex: true,
            //             video: {
            //                 url: item.m3u8,
            //                 pic: item.img,
            //                 thumbnails: item.img,
            //                 type: 'hls'
            //             },
            //             // subtitle: {字幕
            //             //     url: 'dplayer.vtt',
            //             //     type: 'webvtt',
            //             //     fontSize: '25px',
            //             //     bottom: '10%',
            //             //     color: '#b7daff'
            //             // },
            //             // danmaku: {弹幕
            //             //     id: '9E2E3368B56CDBB4',
            //             //     api: 'https://api.prprpr.me/dplayer/',
            //             //     token: 'tokendemo',
            //             //     maximum: 1000,
            //             //     addition: ['https://api.prprpr.me/dplayer/bilibili?aid=4157142'],
            //             //     user: 'DIYgod',
            //             //     bottom: '15%',
            //             //     unlimited: true
            //             // },
            //         });
            //   })
            // })
        }
    })
}
