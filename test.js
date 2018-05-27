/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import pluck from "./index"

test("pluck", () => {
  expect(
    pluck(
      ["attributes", "name"]
    )(
      [
        {
          id: "1",
          attributes: {
            name: "Kurtis",
            age: 29,
            height: "5'10\"",
          },
        },
        {
          id: "2",
          attributes: {
            name: "Chris",
            age: 29,
            height: "5'8\"",
          },
        },
      ]
    )
  ).toEqual(
    [
      "Kurtis",
      "Chris"
    ]
  )
})
