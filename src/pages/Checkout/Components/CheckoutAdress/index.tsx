import { forwardRef } from "react";

import { Controller } from "react-hook-form";

import { AddressContainer } from "./styles";
import { TextInput } from "../../../../components/TextInput";

const CheckoutAddress = forwardRef<HTMLInputElement>((_, ref) => {

  return (
    <AddressContainer>
      <Controller
        name="cep"
        defaultValue=""
        render={({ field }) => (
          <TextInput.Root withoutMarginTop>
            <TextInput.Input placeholder="CEP" {...field} />
          </TextInput.Root>
        )}
      />

      <Controller
        name="rua"
        defaultValue=""
        render={({ field }) => (
          <TextInput.Root fullWidth>
            <TextInput.Input
              placeholder="RUA"
              {...field}
            />
          </TextInput.Root>
        )}
      />

      <TextInput.InputGroup>
        <Controller
          name="numero"
          defaultValue=""
          rules={{ required: true, pattern: /^[0-9]+$/ }}
          render={({ field }) => (
            <TextInput.Root>
              <TextInput.Input placeholder="NÚMERO" {...field} />
            </TextInput.Root>
          )}
        />

        <Controller
          name="complemento"
          defaultValue=""
          render={({ field }) => (
            <TextInput.Root fullWidth optional>
              <TextInput.Input placeholder="COMPLEMENTO" {...field} />
            </TextInput.Root>
          )}
        />
      </TextInput.InputGroup>

      <TextInput.InputGroup>
        <Controller
          name="bairro"
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput.Root>
              <TextInput.Input
                placeholder="BAIRRO"
                {...field}
              />
            </TextInput.Root>
          )}
        />

        <Controller
          name="cidade"
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput.Root>
              <TextInput.Input
                placeholder="CIDADE"
                {...field}
              />
            </TextInput.Root>
          )}
        />

        <Controller
          name="uf"
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput.Root>
              <TextInput.Input
                placeholder="UF"
                {...field}
              />
            </TextInput.Root>
          )}
        />
      </TextInput.InputGroup>
    </AddressContainer>
  );
});

CheckoutAddress.displayName = "CheckoutAddress";

export { CheckoutAddress };
