import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App.jsx";
import Container from "../Container.jsx";

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
            <ComponentPreview path="/Container">
                <Container/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews