import { ArgsType, Field, Int } from '@nestjs/graphql';

import { DummyAvgAggregateInput } from './dummy-avg-aggregate.input';
import { DummyMaxAggregateInput } from './dummy-max-aggregate.input';
import { DummyMinAggregateInput } from './dummy-min-aggregate.input';
import { DummyOrderByInput } from './dummy-order-by.input';
import { DummySumAggregateInput } from './dummy-sum-aggregate.input';
import { DummyWhereInput } from './dummy-where.input';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';

@ArgsType()
export class AggregateDummyArgs {
    @Field(() => DummyWhereInput, {
        nullable: true,
    })
    where?: DummyWhereInput;

    @Field(() => [DummyOrderByInput], {
        nullable: true,
    })
    orderBy?: Array<DummyOrderByInput>;

    @Field(() => DummyWhereUniqueInput, {
        nullable: true,
    })
    cursor?: DummyWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
    })
    skip?: number;

    @Field(() => Boolean, {
        nullable: true,
    })
    count?: true;

    @Field(() => DummyAvgAggregateInput, {
        nullable: true,
    })
    avg?: DummyAvgAggregateInput;

    @Field(() => DummySumAggregateInput, {
        nullable: true,
    })
    sum?: DummySumAggregateInput;

    @Field(() => DummyMinAggregateInput, {
        nullable: true,
    })
    min?: DummyMinAggregateInput;

    @Field(() => DummyMaxAggregateInput, {
        nullable: true,
    })
    max?: DummyMaxAggregateInput;
}
