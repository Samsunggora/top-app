import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import P from "../components/P/P";
import Tag from "../components/Tag/Tag";
import {useEffect, useState} from "react";
import Rating from "../components/Rating/Rating";
import Layout from "../layout/Layout";
import {withLayout} from "../layout/Layout";

function Home(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    useEffect(() => {
        console.log(counter);
        return function cleanUp() {
            console.log("Unmount" + counter);
        }
    });
    return (
        <>
            <Htag tag='h1'>{counter}</Htag>
            <Button appearance="ghost" onClick={() => setCounter(x => x + 1)}> Button counter + </Button>
            <Button appearance="primary" arrow="right">Button</Button>
            <Button appearance="primary" arrow="down">Button</Button>
            <Button appearance="ghost" arrow="right">Button</Button>
            <Button appearance="ghost" arrow="down">Button</Button>
            <P size='s'>Hello word!</P>
            <P size='m'>Hello word!</P>
            <P size='l'>Hello word!</P>
            <P>Hello word!</P>
            <Tag color="ghost">Hello teg!</Tag>
            <Tag color="red">Hello teg!</Tag>
            <Tag color="grey">Hello teg!</Tag>
            <Tag color="green">Hello teg!</Tag>
            <Tag color="primary">Hello teg!</Tag>
            <Tag size="m">Hello teg!</Tag>
            <Tag size="s">Hello teg!</Tag>
            <Tag href="http://localhost:3000/">Hello teg!</Tag>
            <Rating rating={1} isEditable/>
            <Rating rating={2}/>
            <Rating rating={3}/>
            <Rating rating={4}/>
            <Rating rating={5}/>
        </>
    );
}

export default withLayout(Home);
