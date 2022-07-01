import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
    currentStep: Number;
    name: string;
    birth: string;
    email: string;
    celphone: string;
    instagram: string;
    bodyPart: string;
    estimatedSize: string;
    refs: string;
    description: string;
    datePre: string;
    hourPre: string;
}

type Action = {
    type: FormActions;
    payload: any
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void
}

type FormProviderProps = {
    children: ReactNode
}

const initialData: State = {
    currentStep: 0,
    name: '',
    birth: '',
    email: '',
    celphone: '',
    instagram: '',
    bodyPart: '',
    estimatedSize: '',
    refs: '',
    description: '',
    datePre: '',
    hourPre: ''
}

const FormContext = createContext<ContextType | undefined>(undefined);

export enum FormActions {
    setCurrentStep,
    setName,
    setBirth,
    setEmail,
    setCelphone,
    setInstagram,
    setBodyPart,
    setEstimatedSize,
    setRefs,
    setDescription,
    setDatePre,
    setHourPre
}

const formReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setBirth:
            return {...state, birth: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setCelphone:
            return {...state, celphone: action.payload};
        case FormActions.setInstagram:
            return {...state, instagram: action.payload};
        case FormActions.setBodyPart:
            return {...state, bodyPart: action.payload};
        case FormActions.setEstimatedSize:
            return {...state, estimatedSize: action.payload};
        case FormActions.setRefs:
            return {...state, refs: action.payload};
        case FormActions.setDescription:
            return {...state, description: action.payload};
        case FormActions.setDatePre:
            return {...state, datePre: action.payload};
        case FormActions.setHourPre:
            return {...state, hourPre: action.payload};        
        default:
            return state;
    }
}

export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = {state, dispatch};
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined){
        throw new Error ('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}