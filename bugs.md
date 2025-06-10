# Bugs

## Bug ID: 001

**TITLE: Application bundle generation failed**

**DESCRIPTION:**

> Running the app on the first try returns the error `Declaration expected`

**LOGS / CONSOLE OUTPUT:**

```bash
 src/app/app.component.ts:9:2:
      9 │ });

  src/app/components/add-to-cart/add-to-cart.component.ts:7:2:
      7 │ });
```

**SOLUTION:**

- Removed the semi-colon on `line 9` in `src/app/app.component`.

> Placing a semi-colon right after calling the **@Component** directive is a syntax error.

- Placed the exported class right after the **@Component** directive declaration.

**Apply the same steps to the error on line 7 in `src/app/components/add-to-cart.component.ts file**

## Bug ID: 002

**TITLE: NG8001: 'app-add-to-cart' is not a known element**

**DESCRIPTION:**

> The component `app-add-to-cart` is being used within the `app.component.html` **template file**, but it has not been added as an **import dependency** in the `app.component.ts` file.

**LOGS / CONSOLE OUTPUT:**

```bash
 src/app/app.component.html:97:10:
      97 │           <app-add-to-cart />
         ╵           ~~~~~~~~~~~~~~~~~~~

  Error occurs in the template of component AppComponent.

    src/app/app.component.ts:7:15:
      7 │   templateUrl: './app.component.html',
```

**SOLUTION:**

- Import the `app-add-to-cart` component file, i.e `add-to-cart.component.ts` file into the `app.component.ts` file
- Next, add the `AddToCartComponent` to the `app` imports array as a dependency.

```ts
@Component({
	imports: [AddToCartComponent],
})...
```

## Bug ID: 003
