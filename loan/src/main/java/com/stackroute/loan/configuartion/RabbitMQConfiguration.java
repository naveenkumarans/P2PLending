package com.stackroute.loan.configuartion;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfiguration {
    @Bean
    public Queue queue(){
        return new Queue("loan-notification");
    }
    @Bean
    public Exchange exchange(){
        return new DirectExchange("loan-notification-exchange");
    }
    @Bean
    public Jackson2JsonMessageConverter converter(){
        return new Jackson2JsonMessageConverter();
    }
    @Bean
    public RabbitTemplate template(ConnectionFactory connectionFactory, Jackson2JsonMessageConverter converter){
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(converter);
        return rabbitTemplate;
    }
    @Bean
    public Binding bindingExchangeAndQueue(Queue queue, Exchange exchange)
    {
        return BindingBuilder.bind(queue).to(exchange).with("route-key").noargs();
    }
}
