import React from "react";
import { ThumbUp } from "components/UI/muiIcon";
import { Typography, Box, Badge, Chip } from "components/UI/muiComponent";
import styles from "./embedingVote.css";
import { connect } from "react-redux";
let liste = [
    {
        annotationId: "234241weq",
        annotationContent: "sad",
        voteCount: 20,
    },
    {
        annotationId: "12312weq",
        annotationContent: "happy",
        voteCount: 40,
    },
];

function embedingVote(props) {
    const [list, setList] = React.useState(liste);
    const handleClick = (id) => {
        //increase Count from axios and refresh

        let newList = list.map((l) => {
            if (l.annotationId === id)
                return {
                    ...l,
                    voteCount: l.voteCount + 1,
                };
            else return l;
        });
        setList(newList);
    };
    // if(!USER_LOGGED_IN) return <h1>Login please!</h1>
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: 2,
            }}
        >
            {list.map((ls, id) => {
                return (
                    <Box
                        sx={{ display: "flex", alignItems: "center" }}
                        key={ls.annotationId}
                    >
                        <Badge badgeContent={ls.voteCount} color="primary">
                            <Chip
                                label={ls.annotationContent}
                                onClick={() => handleClick(ls.annotationId)}
                            />
                        </Badge>
                    </Box>
                );
            })}
        </Box>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        user: "hi",
    };
};

export default connect(mapStateToProps)(embedingVote);
