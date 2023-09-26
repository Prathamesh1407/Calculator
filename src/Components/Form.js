import styles from '../App.module.css'
import React from 'react'
export default function Form({ result, setResult }) {
    const handleChange = (e) => {
        setResult(e.target.value)
    }
    const handleClick = (event) => {
        setResult(result.concat(event.target.name))
    }
    const handleClear = () => {
        setResult("")
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleCalculate()
    }
    const handleBack = () => {
        setResult(result.slice(0, result.length - 1));
    }
    const handleCalculate = () => {
        try {
            setResult(eval(result).toString())
        }
        catch (err) {
            setResult("Error")
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={result}></input>
            </form>
            <div className={styles.keypad}>
                <button id={styles.clr} className={styles.highlight} onClick={handleClear}>Clear</button>
                <button className={styles.highlight} id={styles.back} onClick={handleBack}>C</button>
                <button className={styles.highlight} name="/" onClick={handleClick}>&divide;</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button className={styles.highlight} name="*" onClick={handleClick}>&times;</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button className={styles.highlight} name="-" onClick={handleClick}>&ndash;</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button className={styles.highlight} name="+" onClick={handleClick}>+</button>
                <button name="0" onClick={handleClick}>0</button>
                <button name="." onClick={handleClick}>.</button>
                <button id={styles.res} name="=" className={styles.highlight} onClick={handleCalculate}>=</button>
            </div>
        </div>
    )
}