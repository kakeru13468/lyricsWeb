import React from 'react';
import LyricsPlayer from '../Components/LyricsPlayer/LyricsPlayer';
import SongInfo from '../Components/SongInfo/SongInfo';
const LyricsStudy = () => {
    const videoURL = 'https://www.youtube.com/watch?v=CQ9RJVgvCNc';
    
    const lyricsData = [
        { "time": "00:00:00,760", "text": "まだくて伝ないもろくて足りない小さくて" },
        { "time": "00:00:07,080", "text": "言わてどうしようも" },
        { "time": "00:00:10,639", "text": "ない僕だ" },
        { "time": "00:00:15,120", "text": "[音楽]" },
        { "time": "00:00:21,039", "text": "知りたかったんだせと失敗丸討伐の今日" },
        { "time": "00:00:26,840", "text": "も回線を引くどしたらどこなろそれじゃ" },
        { "time": "00:00:31,840", "text": "バッタまになって失敗も乗り越えた年だら" },
        { "time": "00:00:36,719", "text": "それボワンと呼ぶんだいつか名前をつけよ" },
        { "time": "00:00:41,120", "text": "夢は叶わない願いは届かないたから歩くの" },
        { "time": "00:00:48,280", "text": "をやめてしまうのか努力は報われない誰も" },
        { "time": "00:00:54,199", "text": "認めてくれないだから走るのをやめて" },
        { "time": "00:00:59,199", "text": "しまうのか" },
        { "time": "00:01:01,120", "text": "止まってしまうのかやめてしまいたい理由" },
        { "time": "00:01:05,080", "text": "なら10も100も1000もあったでも" },
        { "time": "00:01:08,000", "text": "その全て勝ちに見える1があった逃げ出す" },
        { "time": "00:01:13,439", "text": "ための言葉なら飽きるほど張れもそれも" },
        { "time": "00:01:18,360", "text": "こぼさないだけのきだった" },
        { "time": "00:01:33,079", "text": "知りたかったんだ明日と今日の大人と子供" },
        { "time": "00:01:37,520", "text": "の教会線を引くとしたらどこだろう大人に" },
        { "time": "00:01:42,920", "text": "なったらあれになりたいってみんな言うん" },
        { "time": "00:01:46,119", "text": "だけれどじゃは何にもなれないんだろうか" },
        { "time": "00:01:50,040", "text": "今の僕" },
        { "time": "00:01:51,960", "text": "は3年前誰かが空に投げた" },
        { "time": "00:02:00,840", "text": "訳はも恩忘れた必要のない言葉だいつか" },
        { "time": "00:02:08,560", "text": "口ずさむ歌いでもしよう道しるべなんて" },
        { "time": "00:02:13,879", "text": "ない誰も教えてくれないだから足とは" },
        { "time": "00:02:19,319", "text": "間違ったんだ出会えたんだ壊してしまい" },
        { "time": "00:02:24,519", "text": "たい夜なら10も100も1000もあっ" },
        { "time": "00:02:28,200", "text": "たでもその全て" },
        { "time": "00:02:30,400", "text": "も飛び越える羽を持っていたんだあの日" },
        { "time": "00:02:34,120", "text": "始まった物語どこに向かうなろか明日から" },
        { "time": "00:02:38,920", "text": "の僕に宿題が増えたみたいだ" },
        { "time": "00:02:44,970", "text": "[音楽]" },
        { "time": "00:03:01,040", "text": "横1列でスタートきたあの日の僕らはもう" },
        { "time": "00:03:08,680", "text": "い" },
        { "time": "00:03:09,920", "text": "ない君の行く場所に僕の行く場所にそれ" },
        { "time": "00:03:16,480", "text": "それは必要ないからいくつもせそいていく" },
        { "time": "00:03:23,080", "text": "つもの不を超えて鼻が開くように青い宝石" },
        { "time": "00:03:28,200", "text": "が輝くようにって見つけたんだ眩しくて" },
        { "time": "00:03:33,519", "text": "仕方ないんだその光の正体" },
        { "time": "00:03:38,840", "text": "は" },
        { "time": "00:03:40,959", "text": "あやめてしまいたい理由なら10も100" },
        { "time": "00:03:45,599", "text": "も戦もあったでもその全て勝ちポケに見え" },
        { "time": "00:03:50,439", "text": "たのはどうしてあの日始まったもの" },
        { "time": "00:03:54,840", "text": "語り手で僕が見つけた光ボ" },
        { "time": "00:03:59,920", "text": "せて答え合わせをしよう思い思い描けたた" },
        { "time": "00:04:05,400", "text": "人とく光る一瞬のめき" },
        { "time": "00:04:28,720", "text": "[音楽]" }
    ]
    const songName = "*Luna"
    const songAuthor = "アトラクトライト"

    return (
        <>
        <SongInfo songName={songName} songAuthor={songAuthor}/>
        <LyricsPlayer videoUrl={videoURL} lyricsData={lyricsData} />
        </>
    );
};

export default LyricsStudy;