import moment from "moment";
import filterReducer from "../../reducers/filters";

test("should set default filter values", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set text filter", () => {
  const text = "this is my filter test";
  const action = { type: "SET_TEXT_FILTER", text };
  const state = filterReducer(undefined, action);
  expect(state.text).toBe("this is my filter test");
});

test("should set sortBy filter to amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy filter to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test('should set startDate filter', () => {
  const startDate = moment(0)
  const action = {
    type: 'SET_START_DATE',
    startDate
  }
  const state = filterReducer(undefined, action)
  expect(state.startDate).toEqual(moment(0))
})

test('should set endDate filter', () => {
  const endDate = moment(0)
  const action = {
    type: 'SET_END_DATE',
    endDate
  }
  const state = filterReducer(undefined, action)
  expect(state.endDate).toEqual(moment(0))
})