import * as React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import {ComponentWrapper} from 'react-test-wrappers/dist/src/componentWrapper';
import {mobxWrapper} from 'react-test-wrappers/dist/src/wrappers/mobx';
import {AppStore} from '../src/client/stores/AppStore';

export interface IDriverSettings {
    componentClass?;
    attachToDOM?: boolean;
}

export class BaseDriver<Props = {}, /*Adapters = any*/> {
    component: ReactWrapper<Props, any>;
    // protected componentData: Props = <any>{};
    // protected adapters: Adapters = <any>{};
    protected driverSettings: IDriverSettings = {};

    constructor(component?: ReactWrapper<Props, any>) {
        this.component = component;
    }

    render() {
        const ComponentClass = this.driverSettings.componentClass;
        const wrappedComponent = new ComponentWrapper()
            .wrapWith(mobxWrapper({appStore: new AppStore()}))
            .build(<ComponentClass/>);
        this.component = mount(wrappedComponent);
    }

    getByDataHook(hook, parent: ReactWrapper<Props, any> = this.component) {
        return parent.find(`[data-hook="${hook}"]`);
    }

    cleanup() {
        if (this.component) {
            this.component.detach();
        }
    }

    exists() {
        return this.component.exists();
    }
}
