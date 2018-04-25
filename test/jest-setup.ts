import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

process.on('uncaughtException', error => {
    // tslint:disable-next-line
    console.log('uncaughtException', error);
});

// jest.setTimeout(10000);

process.on('unhandledRejection', error => {
    // tslint:disable-next-line
    console.log('unhandledRejection', error);
});
