// @flow
import React, { useState, useEffect, memo, useLayoutEffect } from "react";
import _ from "lodash";
import { FormattedMessage, injectIntl } from "react-intl";
import styles from "components/TextDetail/SelectVersion.css";
import Witness from "lib/Witness";
import { NativeSelect } from "components/UI/muiComponent";

export type Props = {
    witnesses: Witness[],
    activeWitness: Witness | null,
    onSelectedWitness: (witness: Witness) => void,
    user: {},
};

const SelectVersion = (props: Props) => {
    let witnesses = [];
    let tabName = "";
    let r = "";
    let classes = [];
    if (props.witnesses) {
        witnesses = props.witnesses.map((witness) => witness);
        if (props.activeWitness)
            r = props.witnesses.findIndex(
                (l) => l.id === props.activeWitness.id
            );
        witnesses.sort((a, b) => {
            if (a.isWorking) {
                return -1;
            }
            if (b.isWorking) {
                return 1;
            }
            if (a.isBase) {
                return -1;
            }
            if (b.isBase) {
                return 1;
            }
            return 0;
        });
        witnesses = witnesses.sort((a, b) => a.id - b.id);
    }

    const handleChangeWitness = (e) => {
        if (!_.isEmpty(witnesses)) {
            props.onSelectedWitness(witnesses[e.target.value]);
        }
    };

    if (_.isEmpty(witnesses) && !props.activeWitness) return null;

    return (
        <NativeSelect
            onChange={handleChangeWitness}
            className={styles.selectVersion}
            value={r}
            label="Version2"
            classes={{
                root: styles.selectEmpty,
                select: styles.selectOptions,
            }}
        >
            {witnesses.map((witness, key) => {
                if (witness.id === props.activeWitness?.id)
                    classes.push(styles.selected);
                tabName = witness.source.name;

                if (witness.isWorking) {
                    tabName =
                        props.intl.locale === "en"
                            ? props.user.name === "User"
                                ? "Working"
                                : "My Edition"
                            : "མཉམ་འབྲེལ་པར་མ།";
                }

                return (
                    <option
                        key={`versionSelect2-${key}`}
                        value={key}
                        className={styles.selectOptions}
                    >
                        {tabName}
                    </option>
                );
            })}
        </NativeSelect>
    );
};

export default memo(injectIntl(SelectVersion));
