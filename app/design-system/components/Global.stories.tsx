import {Story} from '@storybook/react';

export default {
  title: 'Global'
};

const Template: Story = () => (
  <>
    <h1>Lorem Ipsum Dolor</h1>
    <h2>Lorem Ipsum Dolor</h2>
    <h3>Lorem Ipsum Dolor</h3>
    <h4>Lorem Ipsum Dolor</h4>
    <h5>Lorem Ipsum Dolor</h5>
    <h6>Lorem Ipsum Dolor</h6>
    <p>
      Lorem Ipsum Dolor
    </p>
    <p>
      <strong>Lorem Ipsum Dolor</strong>
    </p>
    <p>
      <a href="#">Lorem Ipsum Dolor</a>
    </p>
    <ul>
      <li>Lorem Ipsum Dolor</li>
      <li>Lorem Ipsum Dolor</li>
      <li>Lorem Ipsum Dolor</li>
    </ul>
    <ol>
      <li>Lorem Ipsum Dolor</li>
      <li>Lorem Ipsum Dolor</li>
      <li>Lorem Ipsum Dolor</li>
    </ol>
    <form>
      <fieldset>
        <label>Lorem ipsum dolor</label>
        <input type="text"></input>
        <p className="havok-dnd-field-error">
          *Lorem ipsum dolor
        </p>
      </fieldset>
      <fieldset>
        <label>Lorem ipsum dolor</label>
        <input type="number"></input>
        <p className="havok-dnd-field-error">
          *Lorem ipsum dolor
        </p>
      </fieldset>
      <fieldset>
        <label>Lorem ipsum dolor</label>
        <input type="checkbox"></input>
        <p className="havok-dnd-field-error">
          *Lorem ipsum dolor
        </p>
      </fieldset>
      <fieldset>
        <label>Lorem ipsum dolor</label>
        <textarea></textarea>
        <p className="havok-dnd-field-error">
          *Lorem ipsum dolor
        </p>
      </fieldset>
    </form>
    <hr/>
    <table>
      <thead>
        <tr>
          <th scope="col">Foo</th>
          <th scope="col">Bar</th>
          <th scope="col">Baz</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td>B</td>
          <td>C</td>
        </tr>
        <tr>
          <td>A</td>
          <td>B</td>
          <td>C</td>
        </tr>
        <tr>
          <td>A</td>
          <td>B</td>
          <td>C</td>
        </tr>
      </tbody>
    </table>
  </>
);

export const Default = Template.bind({});
