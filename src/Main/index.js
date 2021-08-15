import React, { useState } from "react";

const Main = () => {

    const [input,setInput] = useState("");
    const [vowels,setVowels] = useState(0);
    const handleChange = (e) => {
        setInput(e.target.value);
        submit();
        }

    const submit = () => {
        let inputValue =input.toUpperCase();
        let value=0;
        for(var i=0;i<inputValue.length;i++) {
            if(inputValue.charAt(i)==="A"||
            inputValue.charAt(i)==="E"||
            inputValue.charAt(i)==="I"||
            inputValue.charAt(i)==="O"||
            inputValue.charAt(i)==="U")
            value=value+1;
        }
        setVowels(value);
    }

    const styles = {
        mainContainer: {
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "grey",
        },
        input: {
            height: 20,
        },
        output: {
            marginTop: 30,
            fontSize: 30,
            height: 40,
            color: "red",
        },
    }
    return(
        <div style={styles.mainContainer}>
            <textarea style={styles.input} onChange={handleChange}></textarea>
            <div style={styles.output}>
                {input.toUpperCase()}
                <br/>
                <label>Vowels:{vowels}</label>   
                <br/>
                <label>constents:{input.length - vowels}</label>
            </div>
        </div>
    )
};


export default Main;