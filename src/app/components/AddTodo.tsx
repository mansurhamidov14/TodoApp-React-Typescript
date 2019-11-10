import React, {ChangeEvent} from 'react';
import uniqid from 'uniqid';
import { Col, Block, TextInput, Row, CheckBox, Button } from '../../components';
import { EViewTypes } from '../../enums';
import { connect } from 'react-redux';
import { addTodo } from '../entities/todo/actionCreators';
import { AppState } from '../entities/root';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';

const WeekDays: string[] = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const mapStateToProps = (state: AppState) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return bindActionCreators(
        {
          addTodo
        },
        dispatch
      );
}

type AddTodoProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export const AddTodoComponent: React.FC<AddTodoProps> = ({todos, addTodo}) => {
    const [todoTitle, setTodoTitle] = React.useState('');
    const initialState: number[] = [];
    const [todoDays, setTodoDay] = React.useState(initialState);


    const setTodoDays = (weekDay: number) => {
        console.log(weekDay);
        const days = todoDays.indexOf(weekDay) === -1 ? [...todoDays, weekDay] : todoDays.filter(day => day !== weekDay);
        setTodoDay(days)
        console.log(days)
    }

    const saveTodo: () => void = () => {
        addTodo({
            id: uniqid(),
            title: todoTitle,
            weekDays: todoDays
        });
        setTodoDay([]);
        setTodoTitle('');
    }

    const setter = (set: ((value: string) => void)) => (event: ChangeEvent<HTMLInputElement>) => {
        const {
            target: {
                value
            }
        } = event;

        set(value);
    };

    return (
        <Row>
            <Col xs={12}>
                <TextInput 
                    label="Todo title" 
                    onChange={setter(setTodoTitle)}
                    value={todoTitle}
                    type="text"
                    id="todo"
                />
                {WeekDays.map((day, index) => {
                    return (
                        <Block key={index}>
                            <CheckBox
                                onCheck={() => setTodoDays(index + 1)}
                                viewType={EViewTypes.success}
                                checked={todoDays.indexOf(index + 1) !== -1}
                                label={day}
                            />
                        </Block>
                    )
                })}
                <Button variant={EViewTypes.success} title="Add todo" onClick={saveTodo}/>
            </Col>
            <Col xs={12}>
                {
                    Boolean(todos.length) && (
                        <ul>
                            {
                                todos.map((todo) => (
                                    <li key={todo.id}>
                                        {todo.title}
                                    </li>
                                ))
                            }
                        </ul>
                    )

                }
            </Col>
        </Row>
    )
}

export const AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodoComponent)