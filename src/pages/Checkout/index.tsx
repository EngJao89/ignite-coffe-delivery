import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { CurrencyDollar, MapPinLine } from "phosphor-react";

import { 
  CardContainer, 
  CheckoutContainer, 
  CoffeeCardContainer, 
  LeftSection, 
  PaymentSelectContent, 
  RightSection, 
  Title 
} from "./styles";

import { CheckoutAddress, CheckoutCardHeader, CheckoutEmptyList } from "./Components";
import { PaymentSelect, TSelectPayment } from "../../components/PaymentSelect";
import { CheckoutDetails } from "./Components/CheckoutDetails";

export type TAddress = {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
};

export type TFormData = TAddress;

export function Checkout (){
  const [selectedPayment, setSelectedPayment] = useState<TSelectPayment | null>(
    null
  );

  const methods = useForm<TFormData>();

  const { handleSubmit } = methods;

  function handleSelectPayment(paymentType: TSelectPayment) {
    setSelectedPayment(paymentType);
  }

  const creditSelected = selectedPayment === "credit";
  const debitSelected = selectedPayment === "debit";
  const moneySelected = selectedPayment === "money";

  return (
    <CheckoutContainer>
      <RightSection>
        <Title>Complete seu pedido</Title>

        <CardContainer>
          <CheckoutCardHeader 
            title="Endereço de entrega"
            subtitle="Informe seu endereço para que possamos entregar seu pedido"
            icon={{
              component: <MapPinLine size={24} />,
              color: "yellow",
            }}
          />

          <FormProvider {...methods}>
            <CheckoutAddress />
          </FormProvider>
        </CardContainer>

        <CardContainer>
          <CheckoutCardHeader
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={{
              component: <CurrencyDollar size={24} />,
              color: "purple",
            }}
          />
          <PaymentSelectContent>
            <PaymentSelect
              type="credit"
              onSelect={handleSelectPayment}
              isSelected={creditSelected}
            />
            <PaymentSelect
              type="debit"
              onSelect={handleSelectPayment}
              isSelected={debitSelected}
            />
            <PaymentSelect
              type="money"
              onSelect={handleSelectPayment}
              isSelected={moneySelected}
            />
          </PaymentSelectContent>
        </CardContainer>
      </RightSection>

      <LeftSection>
        <Title>Cafés selecionados</Title>

        <CoffeeCardContainer>
          <CheckoutDetails />
        </CoffeeCardContainer>
      </LeftSection>
    </CheckoutContainer>
  )
}