
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">

      <header>
        <div className="header-content">
          <div className="logo-ctn">
            <span className='logo logo-red'>Dev</span>
            <span className='logo logo-black'>challenges.io</span>
          </div>
          <nav>
            <ul className='nav-links'>
              <li>Colors</li>
              <li>Typography</li>
              <li>Spaces</li>
              <li>Buttons</li>
              <li>Inputs</li>
              <li>Grid</li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="welcome">
          <div className="welcome-text">
            <h1>
              Buttons 
            </h1>
          </div>

          <div className="btns-ctn">
            <div className="button-ctn">
              <code className='btn-desc'> {`<Button />`} </code>
              <Button />
            </div>

            <div className="button-ctn">
              <code className='btn-desc'> {`<Button />`} </code>
              <Button />
            </div>
          </div>

          <div className="btns-ctn">
            <div className="button-ctn">
              <code className='btn-desc'> {`<Button variant="outline" />`} </code>
              <Button variant="outline" />
            </div>

            <div className="button-ctn">
              <code className='btn-desc'> {` &:hover, &:focus `} </code>
              <Button variant="outline" />
            </div>
          </div>

          <div className="btns-ctn">
            <div className="button-ctn">
              <code className='btn-desc'> {`<Button variant="text" />`} </code>
              <Button variant="text" />
            </div>

            <div className="button-ctn">
              <code className='btn-desc'> {`&:hover, &:focus`} </code>
              <Button variant="text" />
            </div>
          </div>

          <div className="btns-ctn">
            <div className="button-ctn">
              <code className='btn-desc'> {`<Button />`} </code>
              <Button disableShadow />
            </div>
          </div>

          <div className="btns-ctn">
            <div className="button-ctn">
              <code className='btn-desc'> {`<Button />`} </code>
              <Button disabled />
            </div>

            <div className="button-ctn">
              <code className='btn-desc'> {`<Button />`} </code>
              <Button variant="text" disabled/>
            </div>
          </div>

          <div className="btns-ctn">
            <div className="button-ctn">
              <code className='btn-desc'> {`<Button />`} </code>
              <Button startIcon="icon-btn"/>
            </div>

            <div className="button-ctn">
              <code className='btn-desc'> {`<Button />`} </code>
              <Button endIcon="icon-btn"/>
            </div>
          </div>

          <div className="btns-ctn">
            <div className="button-ctn">
              <code className='btn-desc'> {`<Button />`} </code>
              <Button size="sm" />
            </div>

            <div className="button-ctn">
              <code className='btn-desc'> {`<Button />`} </code>
              <Button size="md"/>
            </div>

            <div className="button-ctn">
              <code className='btn-desc'> {`<Button />`} </code>
              <Button size="lg"/>
            </div>
          </div>

          <div className="btns-ctn">
            <div className="button-ctn">
              <code className='btn-desc'> {`<Button />`} </code>
              <Button color="default" />
            </div>

            <div className="button-ctn">
              <code className='btn-desc'> {`<Button />`} </code>
              <Button color="primary"/>
            </div>

            <div className="button-ctn">
              <code className='btn-desc'> {`<Button />`} </code>
              <Button color="secondary"/>
            </div>

            <div className="button-ctn">
              <code className='btn-desc'> {`<Button />`} </code>
              <Button color="danger"/>
            </div>
          </div>

        </div>
      </main>

      <footer>
        <div className="footer-content">
          <p>
            <span>Icons: </span>  
            <a href="https://material.io/resources/icons/?style=round">
              https://material.io/resources/icons/?style=round
            </a>
          </p>
          <p>
            <span>created by </span>
            <a href="https://twitter.com/Rohitgour03">Rohitgour03</a>
            <a href="https://devChallenges.io">devChallenges.io</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
