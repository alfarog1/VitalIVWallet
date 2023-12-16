import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EagerPayType = {
  readonly id: string;
  readonly Card: string;
  readonly description?: string | null;
}

type LazyPayType = {
  readonly id: string;
  readonly Card: string;
  readonly description?: string | null;
}

export declare type PayType = LazyLoading extends LazyLoadingDisabled ? EagerPayType : LazyPayType

export declare const PayType: (new (init: ModelInit<PayType>) => PayType) & {
  copyOf(source: PayType, mutator: (draft: MutableModel<PayType>) => MutableModel<PayType> | void): PayType;
}