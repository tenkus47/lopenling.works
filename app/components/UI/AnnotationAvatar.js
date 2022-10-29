import React from "react";
import { Avatar, Chip } from "components/UI/muiComponent";
import styles from "./AnnotationAvatar.css";
import { ThumbUpAlt } from "components/UI/muiIcon";

const imageUrl = {
    "སྡེ་དགེ": "https://www.lotsawahouse.org/Images/Situ_Panchen.jpg",
    "པེ་ཅིན།":
        "https://cdn.discordapp.com/attachments/959329505661554708/1034029050580172830/unknown.png",
    "སྣར་ཐང༌།": "https://www.lotsawahouse.org/Images/Situ_Panchen.jpg",
};

function AnnotationAvatar({ name }) {
    function stringToColor(string: string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = "#";

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }
    if (name.includes("མཉམ་འབྲེལ་པར་མ།།") || name.includes("Working")) {
        name = "Working Edition";
    }
    return (
        <Avatar
            alt={"dege"}
            src={imageUrl[name]}
            sx={{
                width: 24,
                height: 24,
                bgcolor: stringToColor(name),
                fontSize: 10,
            }}
        >
            {name.split(" ").length > 1
                ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
                : `${name[0]}`}
        </Avatar>
    );
}

export const Avatarlist = () => {
    const list = [{ img: 23 }, { img: 34 }, { img: 70 }];
    return (
        <>
            <ThumbUpAlt sx={{ fontSize: 16, color: "rgba(0,0,0,0.5)" }} />
            <div className={styles.avatars}>
                {list.map((l, index) => (
                    <span className={styles.avatar} key={"d-" + index}>
                        <img
                            src={`https://picsum.photos/${l.img}`}
                            alt="index-image"
                        />
                    </span>
                ))}
            </div>
            <Chip
                label={`+${Math.floor(Math.random() * 100)}`}
                size="small"
                sx={{ fontSize: 11, height: 11 }}
            />
        </>
    );
};

export default AnnotationAvatar;
