import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App.jsx";
import {Counter} from "../UseStateCounter.jsx";
import {Login} from "../Login.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Counter">
                <Counter/>
            </ComponentPreview>
            <ComponentPreview path="/Login">
                <Login/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews